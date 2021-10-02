import { NO_ERRORS_SCHEMA } from "@angular/core";
import { ProductAlertComponent } from "./product-alert.component";
import { ComponentFixture, TestBed } from "@angular/core/testing";

describe("ProductAlertComponent", () => {

  let fixture: ComponentFixture<ProductAlertComponent>;
  let component: ProductAlertComponent;
  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
      ],
      declarations: [ProductAlertComponent]
    });

    fixture = TestBed.createComponent(ProductAlertComponent);
    component = fixture.componentInstance;

  });

  it("should be able to create component instance", () => {
    expect(component).toBeDefined();
  });
  
});
