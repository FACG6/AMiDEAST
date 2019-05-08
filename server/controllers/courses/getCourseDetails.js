const { getNumberStudentForEachDate } = require('../../database/queries/courseDetails');
const { getDates } = require('../../database/queries/getDates');

const getCourseDetails = (req, res) => {
  const { id } = req.params;
  getDates(id)
    .then(({ rows: dates }) => {
      if (!dates[0]) res.status(404).send({ error: 'sth error' });
      else {
        const fethcingNumberOfStudent = dates.map(date => getNumberStudentForEachDate(id, date.id));
        Promise
          .all(fethcingNumberOfStudent)
          .then((result) => {
            let totalCount = 0;
            const ModifiedDates = dates.map((date, index) => {
              const count = Number(result[index].rows[0].count);
              totalCount += count;
              return { ...date, count };
            });
            res.status(200).send({ data: ModifiedDates, total: totalCount });
          })
          .catch(() => res.status(404).send({ error: 'Bad Request ' }));
      }
    })
    .catch(() => res.status(404).send({ error: 'Internal server Error' }));
};


module.exports = { getCourseDetails };
