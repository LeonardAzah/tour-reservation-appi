describe('Health', () => {
  test('Reservation', async () => {
    const response = await fetch('http://localhost:3000/reservations');

    expect(response.ok).toBeTruthy();
  });
});
