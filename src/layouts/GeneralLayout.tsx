import SideNav from './SideNav';

interface Props {
	children: React.ReactNode;
}

const GeneralLayout = ({ children }: Props) => {
	return (
		<div className='h-screen grid grid-cols-[100px_auto] bg-[#131313]'>
			<SideNav />
			<div className='bg-[#202329]'>{children}</div>
		</div>
	);
};

export default GeneralLayout;
