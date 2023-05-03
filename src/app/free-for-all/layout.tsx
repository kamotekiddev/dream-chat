import SearchBox from '@/features/SingleChat/SearchBox';
import GeneralLayout from '@/layouts/GeneralLayout';

interface Props {
	children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
	return (
		<GeneralLayout>
			<div className='grid grid-cols-[auto_350px] h-full'>
				{children}
				<div className='space-y-4 h-full bg-[#181a1f] p-4'>
					<div className='px-4'>
						<SearchBox placeholder='Search' />
					</div>
				</div>
			</div>
		</GeneralLayout>
	);
};

export default Layout;
