import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CalculatorButtonComponent } from '@/calculator/components/calculator-button/calculator-button.component';

@Component({
  selector: 'calculator',
  standalone: true,
  imports: [CalculatorButtonComponent],
  templateUrl: './calculator.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CalculatorComponent {}
