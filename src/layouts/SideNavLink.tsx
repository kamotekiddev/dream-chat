import Link, { LinkProps } from 'next/link';
import { IconType } from 'react-icons';

interface Props extends LinkProps {
	href: string;
	children: React.ReactNode;
	icon?: IconType;
}
const SideNavLink = ({ href, icon: Icon, children, ...props }: Props) => {
	return (
		<Link
			href={href}
			className='block text-[#A9AEBA] text-[10px] hover:text-[#FDFDFD] transition-all duration-100 ease-linear'
			{...props}
		>
			<div className='grid place-items-center'>
				{Icon && <Icon className='h-7 w-7 mb-2' />}
				{children}
			</div>
		</Link>
	);
};

export default SideNavLink;
