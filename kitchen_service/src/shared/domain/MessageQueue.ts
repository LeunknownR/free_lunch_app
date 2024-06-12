export type MessageQueueConsumer<D> = (data: D) => (Promise<void> | void);
export default interface MessageQueue<D> {
	on(consumer: MessageQueueConsumer<D>): void;
	send(data: D): void;
}