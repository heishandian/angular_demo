import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {DashboardComponent} from './dashboard/dashboard.component';
import {HeroesComponent} from './heroes/heroes.component';
import {HeroDetailComponent} from './hero-detail/hero-detail.component';


/**
 * 添加路由定义
 * 路由定义 会告诉路由器，当用户点击某个链接或者在浏览器地址栏中输入某个 URL 时，要显示哪个视图。
 * @type {({path: string; redirectTo: string; pathMatch: string} |
 * {path: string; component: DashboardComponent} |
  * {path: string; component: HeroDetailComponent} | {path: string; component: HeroesComponent})[]}
 */
const routes: Routes = [
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'}, /*这个路由会把一个与空路径“完全匹配”的 URL 重定向到路径为 '/dashboard' 的路由。*/
  {path: 'dashboard', component: DashboardComponent},
  {path: 'detail/:id', component: HeroDetailComponent},
  {path: 'heroes', component: HeroesComponent}
];

@NgModule({
  /**
   * 你必须首先初始化路由器，并让它开始监听浏览器中的地址变化。
   把 RouterModule 添加到 @NgModule.imports 数组中，并用 routes 来配置它。你只要调用 imports 数组中的 RouterModule.forRoot() 函数就行了。

   这个方法之所以叫 forRoot()，是因为你要在应用的顶级配置这个路由器。 forRoot() 方法会提供路由所需的服务提供商和指令，还会基于浏览器的当前 URL 执行首次导航。
   */
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule] //  导出 RouterModule 让路由器的相关指令可以在 AppModule 中的组件中使用。
})
export class AppRoutingModule {
}
