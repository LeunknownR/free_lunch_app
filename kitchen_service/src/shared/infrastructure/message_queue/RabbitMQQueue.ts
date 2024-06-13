import { Channel } from "amqplib";
import MessageQueue, { MessageQueueConsumer } from "../../domain/MessageQueue";
import RabbitMQManager from "./RabbitMQManager";

export default class RabbitMQQueue<D> implements MessageQueue<D> {
	private constructor(
		private readonly queue: string,
		private readonly channel: Channel
	) {}
	static async New<D>(queue: string, manager: RabbitMQManager) {
		const { channel } = manager;
		await channel.assertQueue(queue);
		return new RabbitMQQueue<D>(queue, channel);
	}
	on(consumer: MessageQueueConsumer<D>): void {
		this.channel.consume(this.queue, async data => {
			const payload = JSON.parse(data.content.toString());
			await consumer(payload);
			this.channel.ack(data);
		});
	}
	send(data: D): void {
		this.channel.sendToQueue(this.queue, Buffer.from(JSON.stringify(data)));
	}
}
