export function toggle(page:string): void {
    console.log(page)
}

export function upDate(): boolean {
    return true
}

type Listener = () => void;

export class Greeter {
	public static greeting: string;
	private static listeners: Listener[] = [];
	private static timer: number;
	private static update: number;
	private static page: string;

	public static timeUpdate(): void {
		this.timer = setTimeout(this.tick.bind(this), 5000);
	}

	public static updateU(v): void {
		// this.page = v
		console.log("sdfsdf")
		// this.change.bind(this);
	}

	public static subscribe(listener: Listener): void {
		this.listeners.push(listener);
	}

	private static stateDidUpdate(): void {
		for (const listener of this.listeners) {
			listener();
		}
	}

	private static tick(): void {
		this.stateDidUpdate();
		this.timeUpdate();
	}

	// private static change(): void {
	// 	this.stateDidUpdate();
	// 	this.updateU(null);
	// }

}