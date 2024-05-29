export const SCALE = 1;
export let durationTime, currentTime, rotation, opacity, randomAngle = 0;
export let bgOpacity = 0;
export let initialTime = 0;
export let elements;
export let animationIsFinished;

export function setElements(object) {
    elements = object;
}

export function setInitialTime(time) {
    initialTime = time;
}

export function setDurationTime(time) {
    durationTime = time;
}

export function setCurrentTime(time) {
    currentTime = time;
}

export function setBgOpacity(value) {
    bgOpacity = value;
}

export function setAnimationIsFinished(value) {
    animationIsFinished = value;
}
