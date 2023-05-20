
import { addTaskController, completeTaskController, deleteTaskController, modifyTaskController, showTaskController } from "./controllers.mjs";
import { addTaskInteractor, modifyTaskInteractor, taskIdInteractor, index } from "./console_interactor.mjs";

switch (index) {
    case 0:
        console.log("--CREATE A NEW TASK--");
        const task = addTaskInteractor();
        addTaskController(task);
        break;
    case 1:
        console.log("--MODIFY AN EXISTING TASK--");
        let modifiedTask = modifyTaskInteractor();
        modifyTaskController(modifiedTask);
        break;

    case 2:
        console.log("--SHOW ALL TASKS--");
        showTaskController();
        break;
    case 3:
        console.log("--SHOW ONLY ONE TASK--");
        const idToSearch = taskIdInteractor("search");
        showTaskController(idToSearch);
        break;
    case 4:
        console.log("--MARK TASK AS COMPLETED--");
        const idToComplete = taskIdInteractor("mark as completed or in process")
        completeTaskController(idToComplete);
        break;
    case 5:
        console.log("--DELETE A TASK--");
        const idToDel = taskIdInteractor("delete")
        deleteTaskController(idToDel);
        break;
    default:
        break;
}



