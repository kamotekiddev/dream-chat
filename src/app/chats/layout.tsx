import GeneralLayout from '@/layouts/GeneralLayout';

interface Props {
	children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
	return <GeneralLayout>{children}</GeneralLayout>;
};

export default Layout;
