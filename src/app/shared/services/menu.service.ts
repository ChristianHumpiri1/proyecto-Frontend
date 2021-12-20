import { Injectable } from "@angular/core";
import { IMenu } from "./menu.interface";
@Injectable(
    {providedIn: 'root',}
)
export class MenuService{
    private listMenu: IMenu[] =[
        {title: "Seminario", url:'/Seminario', icono:"fas fa-tachometer-alt"},

        {title: "Modulos", url:'/modulos', icono:"fas fa-file-alt"},

        {title: "Beneficiario", url:'/dashboard', icono:"fas fa-user-tie"},
        {title: "Usuarios", url:'/users', icono:"fas fa-users"},
        {title: "PedidoOracion", url:'/dashboard', icono:" fas fa-bible"},
        {title: "Asistencia", url:'/dashboard', icono:"fas fa-chart-bar"},
    ];

    getListMenu():IMenu[]{
        return [...this.listMenu];
    }
    getDataPath(path:string):Partial<IMenu>{
        const elementMatched = this.listMenu.find(
            (el) =>path.toLowerCase().indexOf(el.url.toLowerCase())>-1);
        console.log("path-services: "+path.toLowerCase())
        return{
            title: elementMatched?.title,
            icono: elementMatched?.icono
        }
    }
}
