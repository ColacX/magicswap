const startState = [0, 1, 2, 3];
const endState = [0, 1, 3, 2];
const visited = {};
const stack = [];

function rotateALLcw(state) {
	return [state[3], state[0], state[1], state[2]];
}

function rotate0cw(state) {
	return [state[0], state[3], state[1], state[2]];
}

function rotate1cw(state) {
	return [state[3], state[1], state[0], state[2]];
}

function rotate2cw(state) {
	return [state[3], state[0], state[2], state[1]];
}

function rotate3cw(state) {
	return [state[2], state[0], state[1], state[3]];
}

function equals(stateA, stateB) {
	return JSON.stringify(stateA) === JSON.stringify(stateB);
}

function compute(task) {
	const jsonState = JSON.stringify(task.state);

	if (visited[jsonState]) {
		return null;
	}

	visited[jsonState] = true;
	task.path.push(task.state);

	if (equals(task.state, endState)) {
		return task.path;
	}

	stack.push({ state: rotateALLcw(task.state), path: task.path });
	stack.push({ state: rotate0cw(task.state), path: task.path });
	stack.push({ state: rotate1cw(task.state), path: task.path });
	stack.push({ state: rotate2cw(task.state), path: task.path });
	stack.push({ state: rotate3cw(task.state), path: task.path });
}

stack.push({ state: startState, path: [] });

while (stack.length > 0) {
	const task = stack.pop();
	const path = compute(task);
	if (path) {
		console.log(path);
	}
}
