import { Breadcrumbs } from '@/components/global/breadcrumbs';
import { CreateProfileOne } from '@/components/forms/user-profile-stepper/create-profile';
import PageContainer from '@/components/layout/dashboard/page-container';

const breadcrumbItems = [
  { title: 'Dashboard', link: '/dashboard' },
  { title: 'Profile', link: '/dashboard/profile' },
];
export default function page() {
  return (
    <PageContainer scrollable={true}>
      <div className="space-y-4">
        <Breadcrumbs items={breadcrumbItems} />
        <CreateProfileOne categories={[]} initialData={null} />
      </div>
    </PageContainer>
  );
}
