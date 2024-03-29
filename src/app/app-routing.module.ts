import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { DashboardDemoComponent } from './demo/view/dashboarddemo.component';
import { FormLayoutDemoComponent } from './demo/view/formlayoutdemo.component';
import { PanelsDemoComponent } from './demo/view/panelsdemo.component';
import { OverlaysDemoComponent } from './demo/view/overlaysdemo.component';
import { MediaDemoComponent } from './demo/view/mediademo.component';
import { MessagesDemoComponent } from './demo/view/messagesdemo.component';
import { MiscDemoComponent } from './demo/view/miscdemo.component';
import { EmptyDemoComponent } from './demo/view/emptydemo.component';
import { ChartsDemoComponent } from './demo/view/chartsdemo.component';
import { FileDemoComponent } from './demo/view/filedemo.component';
import { DocumentationComponent } from './demo/view/documentation.component';
import { AppMainComponent } from './app.main.component';
import { AppNotfoundComponent } from './pages/app.notfound.component';
import { AppErrorComponent } from './pages/app.error.component';
import { AppAccessdeniedComponent } from './pages/app.accessdenied.component';
import { InputDemoComponent } from './demo/view/inputdemo.component';
import { FloatLabelDemoComponent } from './demo/view/floatlabeldemo.component';
import { InvalidStateDemoComponent } from './demo/view/invalidstatedemo.component';
import { ButtonDemoComponent } from './demo/view/buttondemo.component';
import { TableDemoComponent } from './demo/view/tabledemo.component';
import { ListDemoComponent } from './demo/view/listdemo.component';
import { TreeDemoComponent } from './demo/view/treedemo.component';
import { AppCrudComponent } from './pages/app.crud.component';
import { AppCalendarComponent } from './pages/app.calendar.component';
import { AppTimelineDemoComponent } from './pages/app.timelinedemo.component';
import { AppInvoiceComponent } from './pages/app.invoice.component';
import { AppHelpComponent } from './pages/app.help.component';
import { BlocksComponent } from './blocks/blocks/blocks.component';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { authGuard } from './pages/auth/auth.guard';

@NgModule({
    imports: [
        RouterModule.forRoot([
            {
                path: 'layout', component: AppMainComponent,
                children: [
                    { path: 'employee', loadChildren: () => import('../../src/app/pages/employee/employee.module').then(m => m.EmployeeModule) },
                    { path: 'daytype', loadChildren: () => import('../../src/app/pages/daytype/daytype.module').then(m => m.DaytypeModule), canActivate: [authGuard] },
                    { path: 'role', loadChildren: () => import('../../src/app/pages/role/role.module').then(m => m.RoleModule), canActivate: [authGuard] },
                    { path: 'timeslots', loadChildren: () => import('../../src/app/pages/time-slot/time-slot.module').then(m => m.TimeSlotModule), canActivate: [authGuard] },
                    { path: 'insurance', loadChildren: () => import('../../src/app/pages/insurance/insurance.module').then(m => m.InsuranceModule), canActivate: [authGuard] },
                    { path: '', component: DashboardDemoComponent },
                    { path: 'uikit/formlayout', component: FormLayoutDemoComponent },
                    { path: 'dashboard', component: DashboardComponent },
                    { path: 'uikit/input', component: InputDemoComponent },
                    { path: 'uikit/floatlabel', component: FloatLabelDemoComponent },
                    { path: 'uikit/invalidstate', component: InvalidStateDemoComponent },
                    { path: 'uikit/button', component: ButtonDemoComponent },
                    { path: 'uikit/table', component: TableDemoComponent },
                    { path: 'uikit/list', component: ListDemoComponent },
                    { path: 'uikit/tree', component: TreeDemoComponent },
                    { path: 'uikit/panel', component: PanelsDemoComponent },
                    { path: 'uikit/overlay', component: OverlaysDemoComponent },
                    { path: 'uikit/menu', loadChildren: () => import('./demo/view/menus/menus.module').then(m => m.MenusModule) },
                    { path: 'employee', loadChildren: () => import('./demo/view/menus/menus.module').then(m => m.MenusModule) },
                    { path: 'uikit/media', component: MediaDemoComponent },
                    { path: 'uikit/message', component: MessagesDemoComponent },
                    { path: 'uikit/misc', component: MiscDemoComponent },
                    { path: 'uikit/charts', component: ChartsDemoComponent },
                    { path: 'uikit/file', component: FileDemoComponent },
                    // {path: 'utilities/icons', component: IconsComponent},
                    { path: 'pages/crud', component: AppCrudComponent },
                    { path: 'pages/calendar', component: AppCalendarComponent },
                    { path: 'pages/timeline', component: AppTimelineDemoComponent },
                    { path: 'pages/invoice', component: AppInvoiceComponent },
                    { path: 'pages/help', component: AppHelpComponent },
                    { path: 'pages/empty', component: EmptyDemoComponent },
                    { path: 'documentation', component: DocumentationComponent },
                    { path: 'blocks', component: BlocksComponent }
                ]
            },
            { path: 'error', component: AppErrorComponent },
            { path: 'access', component: AppAccessdeniedComponent },
            { path: 'notfound', component: AppNotfoundComponent },
            { path: 'login', component: LoginComponent, title: 'Managment System | Login' },
            { path: 'dashboard', component: DashboardComponent, title: 'Managment System | Dashboard' },
            // { path: 'layout', component: LayoutComponent, title: '' },
            { path: '', redirectTo: '/login', pathMatch: 'full' },
            { path: '**', redirectTo: '/notfound' },
        ], { scrollPositionRestoration: 'enabled' })
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
