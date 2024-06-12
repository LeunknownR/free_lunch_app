import amqp, { Channel, Connection } from "amqplib"

const {
	RABBITMQ_PORT,
	RABBITMQ_HOSTNAME, RABBITMQ_VHOST,
	RABBITMQ_USER, RABBITMQ_PASSWORD
} = process.env;
export default class RabbitMQManager {
	private constructor(readonly channel: Channel) {}
	static async connect(): Promise<RabbitMQManager> {
		const connection: Connection = await amqp.connect({
			protocol: "amqp",
			hostname: RABBITMQ_HOSTNAME,
			port: parseInt(RABBITMQ_PORT),
			username: RABBITMQ_USER,
			password: RABBITMQ_PASSWORD,
			vhost: RABBITMQ_VHOST
		});
		const channel = await connection.createChannel();
		return new RabbitMQManager(channel);
	}
}