
/**
 * Trims a string to a specified maximum length and appends an ellipsis if the string exceeds that length.
 * 
 * @param txt - The string to be trimmed.
 * @param maxSize - The maximum allowed length of the string before trimming. Defaults to 50.
 * @returns The trimmed string with an ellipsis if it exceeds the maximum length, otherwise the original string.
 */



export function textSlice(txt:string,maxSize:number=50){
    if(txt.length>=maxSize) return txt.slice(0,maxSize)+"...";
    return txt;
}