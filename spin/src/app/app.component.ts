import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<button (click)="printSpiral(3)">Click</button>`
  
})
export class AppComponent  {
   
    printSpiral(n:number):void
    {
        for (var i = 0; i < n; i++)
        {
            for (var j = 0; j < n; j++)
            {
                // x stores the layer in which (i, j)th
                // element lies
                let x;
     
                // Finds minimum of four inputs
                x = Math.min(Math.min(i, j), Math.min(n-1-i, n-1-j));
     
                // For upper right half
                if (i <= j) {
                    let num =(n-2*x)*(n-2*x) - (i-x)- (j-x);
                    console.log(" " +(num.toString() + "     "));
                    
                }
                // for lower left half
                else {
                    var num1 = (n-2*x-2)*(n-2*x-2) + (i-x) + (j-x);
                    console.log(" "+(num1.toString() + "     "));
                }
            }
            console.log("\n");
        }
    }
    


}