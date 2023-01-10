  export function getSpinnerSize(e: Event, spinnerDiameterFactor:number, spinnerOverflowDiameterFactor:number):number {

    let browserWindow = e.target as Window;
    let height = browserWindow.innerHeight;
    let width = browserWindow.innerWidth;

    // if the spinner is about to overflow sideways from the window, reduce the diameter to
    // spinnerOverflowDiameterFactor percent of the window width
    if (height * spinnerDiameterFactor > width * spinnerOverflowDiameterFactor) {
      return width * spinnerOverflowDiameterFactor;
    }

    return height*spinnerDiameterFactor
  }
