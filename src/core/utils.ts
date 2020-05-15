import fs from "fs";

export function getFiles(dir: string): string[] {
    let res: string[] = [];
    const files = fs.readdirSync(dir);
    // console.log(files)
    for (const file of files) {
        const name = `${dir}/${file}`;
        if (fs.statSync(name).isDirectory()) {
            const tmp = getFiles(name);
        }
        res.push(name);
    }

    return res;
}