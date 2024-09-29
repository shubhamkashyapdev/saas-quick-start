'use client';
import { Trash } from 'lucide-react';
import Image from 'next/image';
import { IMG_MAX_LIMIT } from '@/components/forms/product-form';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { UploadFileResponse } from '@/types';
import { UploadDropzone } from '@/lib/uploadthing';

interface ImageUploadProps {
  onChange?: any;
  onRemove: (value: UploadFileResponse[]) => void;
  value: UploadFileResponse[];
}

export default function FileUpload({
  onChange,
  onRemove,
  value,
}: ImageUploadProps) {
  const { toast } = useToast();
  const onDeleteFile = (key: string) => {
    const files = value;
    let filteredFiles = files.filter((item) => item.key !== key);
    onRemove(filteredFiles);
  };
  const onUpdateFile = (newFiles: UploadFileResponse[]) => {
    onChange([...value, ...newFiles]);
  };
  return (
    <div>
      <div className="mb-4 flex items-center gap-4">
        {!!value.length &&
          value?.map((item) => (
            <div
              key={item.key}
              className="relative h-[200px] w-[200px] overflow-hidden rounded-md"
            >
              <div className="absolute right-2 top-2 z-10">
                <Button
                  type="button"
                  onClick={() => onDeleteFile(item.key)}
                  variant="destructive"
                  size="sm"
                >
                  <Trash className="h-4 w-4" />
                </Button>
              </div>
              <div>
                <Image
                  fill
                  className="object-cover"
                  alt="Image"
                  src={item.url || ''}
                />
              </div>
            </div>
          ))}
      </div>
      <div>
        {value.length < IMG_MAX_LIMIT && (
          <UploadDropzone
            className="ut-label:text-sm ut-allowed-content:ut-uploading:text-red-300 py-2 dark:bg-zinc-800"
            endpoint="imageUploader"
            config={{ mode: 'auto' }}
            content={{
              allowedContent({ isUploading }) {
                if (isUploading)
                  return (
                    <>
                      <p className="mt-2 animate-pulse text-sm text-slate-400">
                        Img Uploading...
                      </p>
                    </>
                  );
              },
            }}
            onClientUploadComplete={(res) => {
              // Do something with the response
              const data: UploadFileResponse[] | undefined = res;
              if (data) {
                onUpdateFile(data);
              }
            }}
            onUploadError={(error: Error) => {
              toast({
                title: 'Error',
                variant: 'destructive',
                description: error.message,
              });
            }}
            onUploadBegin={() => {
              // Do something once upload begins
            }}
          />
        )}
      </div>
    </div>
  );
}