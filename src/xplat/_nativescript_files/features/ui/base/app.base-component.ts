import { Component } from '@angular/core';

// libs
import { BaseComponent } from '@<%= npmScope %>/core';
import { AppService } from '@<%= npmScope %>/nativescript/core';

export abstract class AppBaseComponent extends BaseComponent {
  
  constructor(
    protected appService: AppService
  ) {
    super();
  }
}
