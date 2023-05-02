import { FiSettings } from 'react-icons/fi';

interface Props {
	title: string;
	isOnline: boolean;
	onSettingsClick: () => void;
}

const ChatHeader = ({ title, isOnline, onSettingsClick }: Props) => {
	const status = isOnline ? 'Online' : 'Offline';
	const statusColor = status === 'Online' ? 'text-green-400' : 'text-gray-400';

	return (
		<header className='flex gap-4 items-center justify-between'>
			<div>
				<h1 className='text-lg font-bold'>{title}</h1>
				<p className={`text-xs ${statusColor}`}>{status}</p>
			</div>
			<div>
				<FiSettings />
			</div>
		</header>
	);
};

export default ChatHeader;
