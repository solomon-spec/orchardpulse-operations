# Quality sample queue

The quality queue represents incoming lots waiting for a grade decision.

Sending the first sample to the end supports a temporary deferral without losing it. Every sample exposes a local grade control with Pending, Pass, and Hold values.

The component test verifies the initial lot order and the deferral interaction while leaving grade persistence to deeper validation.
