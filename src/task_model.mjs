export class TaskModel {
    /**
     * 
     * @param {number} id 
     * @param {string} description 
     * @param {{complete:boolean,deletable:boolean}} state 
     * @returns {TaskModel}
     */
    constructor(id, description, state) {
        this.id = id;
        this.description = description;
        this.state = state;
    }
}

/**
 * @constant tasklist
 * @type TaskModel[]
 */
export const tasklist = [];

export const initializeTaskList = () => {
    const t1 = new TaskModel(0, "this is an awesome content", { complete: false, deletable: false })
    const t2 = new TaskModel(1, "this is my second try", { complete: true, deletable: true })
    const t3 = new TaskModel(2, "this is really exciting", { complete: false, deletable: true })

    if (tasklist.length === 3) {
        return;
    } else {
        tasklist.push(t1)
        tasklist.push(t2)
        tasklist.push(t3)
    }
}

/**
 * returns 1 if done, returns 0 if something was wrong
 * @param {TaskModel} task 
 * @returns {number}
 */
export const addTask = (task) => {
    try {
        tasklist.push(task);
        return 1;
    } catch {
        return 0;
    }
}

/**
 * returns 1 if done, returns 0 if something was wrong
 * @param {TaskModel} modification 
 * @returns {number}
 */
export const modifyTask = (modification) => {
    const found = tasklist.filter(task => task.id === modification.id)[0];
    try {
        found.description = modification.description;
        found.state = modification.state;
        return 1;
    } catch (error) {
        console.log(error);
        return 0;
    }
}

/**
 * returns 1 if done, returns 0 if something was wrong
 * @param {number} id 
 * @returns {number}
 */
export const deleteTask = (id) => {
    const found = tasklist.filter(task => task.id === id)[0];
    if (found) {
        tasklist.splice(id, 1);
        return 1;
    } else {
        return 0;
    }
}

/**
 * returns 1 if done, returns 0 if something was wrong
 * @param {number} id 
 * @returns {number}
 */
export const completeTask = (id) => {
    const found = tasklist.filter(task => task.id === id)[0];
    try {
        found.state.complete = !found.state.complete;
        return 1;
    } catch {
        return 0;
    }
}

/**
 * returns 1 if done, returns 0 if something was wrong.
 * returns a list of tasks if id was not provided, returns only one otherwise
 * @param {number} id - optional param to show only one by id
 * @returns {TaskModel[]|TaskModel}
 */
export const showTasks = (id) => {
    if (typeof id === "number") return tasklist.filter(task => task.id === id)[0];
    else return tasklist;
}