import GeneralLayout from '@/layouts/GeneralLayout';

interface Props {
	children: React.ReactNode;
}

const SettingsLayout = ({ children }: Props) => {
	return <GeneralLayout>{children}</GeneralLayout>;
};

export default SettingsLayout;
