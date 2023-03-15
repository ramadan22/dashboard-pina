import { useState } from 'react';

import statistic from '@/data/statistic.json';

const useStatistic = () => {
  const [other] = useState(statistic.other);
  const [fundamental] = useState(statistic.fundamental);
  const [earning] = useState(statistic.earning);
  const [Profitabilitas] = useState(statistic.profitabilitas);
  const [solvabilitas] = useState(statistic.solvabilitas);

  return {
    other,
    fundamental,
    earning,
    Profitabilitas,
    solvabilitas,
  }
};

export default useStatistic;
