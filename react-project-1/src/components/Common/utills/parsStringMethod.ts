export const stringParse = (str:string) => {
    const arr =  str.split(' ')
    let resStr =  arr[arr.length - 1].split('').filter(s => /^[a-zа-я]*$/i.test(s)).splice(8).join('')
    return resStr.charAt(0).toLowerCase() + resStr.slice(1)
}
