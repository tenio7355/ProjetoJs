export async function awaitPromisseOneSecond(timeMiliSeconds) {
    await new Promise(resolve => setTimeout(resolve, timeMiliSeconds));
}
export async function createLoading(element, timeMiliSeconds = 1000) {
    element.innerHTML += `
    <div class="flex justify-center col-span-2 w-full">
      <div class="border-[5px] border-green-500 border-t-transparent border-r-transparent w-14 h-14 rounded-full animate-rotate"></div>
    </div> 
    `;
    await awaitPromisseOneSecond(timeMiliSeconds);
    element.innerHTML = "";
}
