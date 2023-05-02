interface ChatMate {
	id: string;
	image?: string;
	name: string;
}

interface Sender {
	id: string;
	image: string;
	name: string;
}

interface Message {
	id: string;
	sender: Sender;
	image?: string;
	text?: string;
}
