import GeneralLayout from '@/layouts/GeneralLayout';

interface Props {
	children: React.ReactNode;
}

function SuggestionsLayout({ children }: Props) {
	return <GeneralLayout>{children}</GeneralLayout>;
}

export default SuggestionsLayout;
