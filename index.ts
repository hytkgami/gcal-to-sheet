const run = () => {
  const startDate = SpreadsheetApp.getActiveSheet().getRange('A1').getValue();
  const endDate = SpreadsheetApp.getActiveSheet().getRange('A2').getValue();
  getEvents(startDate, endDate);
};

const getEvents = (startDate: string, endDate: string) => {
  const sheet = SpreadsheetApp.getActiveSheet();
  const calendar = CalendarApp.getDefaultCalendar();

  const events = calendar.getEvents(new Date(startDate), new Date(endDate));
  for (const event of events) {
    sheet.appendRow([
      event.getTitle(),
      event.getStartTime(),
      event.getEndTime(),
      event.getLocation(),
      event.getCreators()[0],
    ]);
  }
};
