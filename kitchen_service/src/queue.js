import amqp from "amqplib"
const CHAT_QUEUE = "CHAT";

const {
	RABBITMQ_PROTOCOL, RABBITMQ_PORT,
	RABBITMQ_HOSTNAME, RABBITMQ_VHOST,
	RABBITMQ_USER, RABBITMQ_PASSWORD
} = process.env;
export default async function getQueueManager() {
	const connection = await amqp.connect({
		protocol: RABBITMQ_PROTOCOL,
		hostname: RABBITMQ_HOSTNAME,
		port: RABBITMQ_PORT,
		username: RABBITMQ_USER,
		password: RABBITMQ_PASSWORD,
		vhost: RABBITMQ_VHOST
	});
	const channel = await connection.createChannel();
	await channel.assertQueue(CHAT_QUEUE);
	return {
		sendChatMessage: ({ from, to, content }) => {
			channel.sendToQueue(
				CHAT_QUEUE,
				Buffer.from(
					JSON.stringify({ from, to, content })
				)
			);
		}
	};
}
