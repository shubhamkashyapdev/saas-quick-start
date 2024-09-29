import { Breadcrumbs } from '@/components/global/breadcrumbs';
import PageContainer from '@/components/layout/dashboard/page-container';
import { UserClient } from '@/components/tables/user-tables/client';
import { users } from '@/data/data';

const breadcrumbItems = [
  { title: 'Dashboard', link: '/dashboard' },
  { title: 'User', link: '/dashboard/user' },
];
export default function page() {
  return (
    <PageContainer>
      <div className="space-y-2">
        <Breadcrumbs items={breadcrumbItems} />
        <UserClient data={users} />
      </div>
    </PageContainer>
  );
}
