class TodoItem {
    public Title: string;
    public Done: boolean;

    constructor(title: string, done: boolean) {
        this.Title = title;
        this.Done = done;
    }
}

export { TodoItem };
