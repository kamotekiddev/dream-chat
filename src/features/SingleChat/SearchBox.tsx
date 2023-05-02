import { FaSearch } from 'react-icons/fa';

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {}

const SearchBox = ({ ...props }: Props) => {
	return (
		<div className='flex gap-sm items-center gap-4 bg-[#2e343d] rounded-xl p-4'>
			<FaSearch className='flex-shrink-0' />
			<input
				type='text'
				className='bg-transparent outline-none flex-1 text-sm'
				{...props}
			/>
		</div>
	);
};

export default SearchBox;
