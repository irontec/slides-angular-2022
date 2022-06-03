import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { SharedModule } from "../shared/shared.module";
import { ProfileComponent } from "./components/profile.component";
import { DashboardPageComponent } from "./containers/dashboard-page.component";
import { DashboardRoutingModule } from "./dashboard-routing.module";
import { ProfileService } from "./services/profile.service";

@NgModule({
  declarations: [
    DashboardPageComponent,
    ProfileComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule
  ],
  providers: [ProfileService]
})
export class DashboardModule {}