export function createWelcomeEmail(name, profileUrl) {
  return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Welcome to Loom - Your Digital Frontier</title>
  </head>
  <body style="font-family: 'Arial', sans-serif; line-height: 1.6; color: #e0e0e0; background-color: #0a0f18; max-width: 600px; margin: 0 auto; padding: 20px;">
    <div style="background-image: url('https://images.unsplash.com/photo-1635776062127-d379bfcba9f8?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80'); background-size: cover; background-position: center; padding: 100px 30px; text-align: center; border-radius: 8px; position: relative; overflow: hidden;">
      <div style="position: absolute; top: 0; left: 0; right: 0; bottom: 0; background: rgba(10,15,24,0.7);"></div>
      <h1 style="color: #4a90e2; margin: 0; font-size: 48px; font-weight: 700; letter-spacing: 5px; text-shadow: 0 0 10px #4a90e2; position: relative; z-index: 1;">LOOM</h1>
      <p style="color: #ffffff; font-size: 18px; margin-top: 10px; text-shadow: 0 0 5px #4a90e2; position: relative; z-index: 1;">Weaving the Digital Tapestry</p>
    </div>
    <div style="background-color: #111822; padding: 30px; margin-top: 20px; border-radius: 8px; box-shadow: 0 0 20px rgba(74,144,226,0.1);">
      <p style="font-size: 18px; color: #4a90e2;"><strong>${name},</strong></p>
      <p>Your presence has been detected in the Loom network. Prepare for digital immersion.</p>
      <div style="background-color: #1c2636; padding: 20px; border-radius: 6px; margin: 20px 0; border-left: 3px solid #4a90e2;">
        <p style="font-size: 16px; margin: 0; color: #ffffff;"><strong>Initialization protocol:</strong></p>
        <ul style="padding-left: 20px; color: #e0e0e0;">
          <li>Calibrate your neural interface</li>
          <li>Sync with the collective datastream</li>
          <li>Access encrypted knowledge nodes</li>
          <li>Contribute to the evolving algorithm</li>
        </ul>
      </div>
      <div style="text-align: center; margin: 30px 0;">
        <a href="${profileUrl}" style="background-color: #4a90e2; color: #ffffff; padding: 14px 28px; text-decoration: none; border-radius: 4px; font-weight: 700; font-size: 16px; transition: all 0.3s; letter-spacing: 1px; text-transform: uppercase; box-shadow: 0 0 10px rgba(74,144,226,0.5);">Initialize</a>
      </div>
      <p style="font-size: 12px; color: #a0a0a0; text-align: center;">Notice: Digital integration may alter your perception of reality.</p>
    </div>
    <div style="margin-top: 20px; display: flex; justify-content: space-between;">
      <img src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-1.2.1&auto=format&fit=crop&w=280&q=80" alt="Digital Network" style="width: 48%; border-radius: 8px; box-shadow: 0 0 10px rgba(74,144,226,0.3);">
      <img src="https://images.unsplash.com/photo-1515630278258-407f66498911?ixlib=rb-1.2.1&auto=format&fit=crop&w=280&q=80" alt="Holographic Interface" style="width: 48%; border-radius: 8px; box-shadow: 0 0 10px rgba(74,144,226,0.3);">
    </div>
    <div style="background-color: #111822; padding: 30px; margin-top: 20px; border-radius: 8px; text-align: center; box-shadow: 0 0 20px rgba(74,144,226,0.1);">
      <p style="border-top: 1px solid #4a90e2; padding-top: 20px; margin-top: 20px; font-style: italic; color: #a0a0a0;">Embrace the digital evolution,<br><span style="color: #4a90e2;">Loom Architect</span></p>
    </div>
    <div style="text-align: center; margin-top: 20px; font-size: 12px; color: #6a6a6a;">
      <p>Your digital footprint is permanent. Loom remembers all.</p>
    </div>
  </body>
  </html>
  `
}