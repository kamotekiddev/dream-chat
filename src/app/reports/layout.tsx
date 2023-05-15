import GeneralLayout from '@/layouts/GeneralLayout';

interface Props {
	children: React.ReactNode;
}

function ReportsLayout({ children }: Props) {
	return <GeneralLayout>{children}</GeneralLayout>;
}

export default ReportsLayout;
