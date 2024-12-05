# Approximation-of-pi-improved
A second and better version of the approximation of π using Monte Carlo method simulation, enjoy!

The updated version introduces several changes to enhance functionality and maintain the visual integrity of the simulation. Points now remain on the canvas throughout the simulation, achieved by storing their coordinates and state (inside or outside the circle) in an array called allPoints. This ensures a persistent visual record of all generated points.

In each frame, previously generated points are redrawn alongside newly generated ones, with their colors reflecting their position relative to the circle—green for points inside and red for those outside. The points are rendered as uniform circles with a diameter of 6 pixels, providing a clearer and more aesthetically pleasing representation.

The reset functionality has been refined to clear the stored points and restart the simulation cleanly, beginning anew without any residual data from the previous run. Calculations for determining how many points lie inside the circle now leverage the stored data, ensuring consistency between the visual output and the mathematical computation of π.

These changes enhance both the clarity and stability of the simulation, ensuring that all points remain visible and accurately represented while maintaining an efficient and responsive performance.
