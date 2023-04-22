import SideNav from './SideNav';

interface Props {
	children: React.ReactNode;
}

const GeneralLayout = ({ children }: Props) => {
	return (
		<div className='h-screen grid grid-cols-[100px_auto_350px] bg-[#131313]'>
			<SideNav />
			<div className='bg-[#202329] p-4 rounded-3xl'>{children}</div>
		</div>
	);
};

export default GeneralLayout;
