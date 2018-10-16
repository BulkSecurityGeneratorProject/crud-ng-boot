import { NgModule } from '@angular/core';

import { CrudNgBootSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [CrudNgBootSharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    exports: [CrudNgBootSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class CrudNgBootSharedCommonModule {}
