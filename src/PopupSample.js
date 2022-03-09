import React from 'react'
import SampleStore from './SampleStore'
import useScript from 'react-script-hook';
import config from './config';

const PopupSample = () => {
  useScript({
    src: 'https://js.yoco.com/sdk/v1/yoco-sdk-web.js',
    onload: () => {

      // eslint-disable-next-line no-undef
      const yoco = new YocoSDK({
        publicKey: config.sdk.PUBLIC_KEY,
      })

      var checkoutButton = document.querySelector('#pay-button')
      checkoutButton.addEventListener('click', function () {
        yoco.showPopup({
          amountInCents: 2799,
          currency: 'ZAR',
          name: 'Your Store',
          description: 'Awesome description',
          displayMethod: 'MANUAL',
          callback: function (chargeToken) {
            alert(`Card tokenization completed, your server must now process the payment`)
          },
        })
      })
    },
  })

  return (
    <SampleStore>
      <button id="pay-button" className="submit-button">Pay now</button>
    </SampleStore>
  )
}

export default PopupSample