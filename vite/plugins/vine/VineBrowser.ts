import {Plugin} from "vite"
import {readFileSync} from "fs"

const VineBrowser = function (): Plugin{
    return {
        name:'vine-browser',
        apply:'build',
        load(id){
            if(/node_modules\/@vinejs/.test(id)){
                const code = readFileSync(id.replace(/\?.+$/,'')).toString()
                return code.replace(/import.+(\{.+}).+from.+(node:dns\/promises|node:util).+/g, (m, $1, $2)=>{
                    return `import ${$1} from "@pwd/vite/plugins/vine/${$2}.ts"`
                })
            }
        },
    } as Plugin
}
export default VineBrowser
