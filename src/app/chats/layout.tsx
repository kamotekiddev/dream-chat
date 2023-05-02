import ChatMates from '@/features/SingleChat/ChatMates';
import SearchBox from '@/features/SingleChat/SearchBox';
import GeneralLayout from '@/layouts/GeneralLayout';

interface Props {
	children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
	return (
		<GeneralLayout>
			<div className='grid grid-cols-[350px_auto] h-full'>
				<div className='space-y-4 h-full bg-[#181a1f] p-4'>
					<div className='px-4'>
						<SearchBox placeholder='Search' />
					</div>
					<ChatMates />
				</div>
				{children}
			</div>
		</GeneralLayout>
	);
};

export default Layout;
