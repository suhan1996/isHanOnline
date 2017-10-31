# isHanOnline
Am I online?

I'm using a Chrome Extension to autimatically send a Date.now() string to my database every 1000s, and the transmitter will retrieve the latest time string, then compare it with a new Date.now(), if it's < 1000s, then Han is online.