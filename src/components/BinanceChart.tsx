import ReactApexChart from 'react-apexcharts';
import { useCryptoStore } from '../stores/store';
import Loader from './Loader/Loader';

export default function BinanceChart() {
  // Variables provenientes del state
  const result = useCryptoStore((state) => state.result);
  const selectedPair = useCryptoStore((state) => state.selectedPair);
  const error = useCryptoStore((state) => state.error);
  const loading = useCryptoStore((state) => state.loading);

  // Configuraciones para apexcharts
  const options: ApexCharts.ApexOptions = {
    title: {
      text: selectedPair,
      align: 'center',
    },
    xaxis: {
      type: 'datetime',
    },
    yaxis: {
      tooltip: {
        enabled: true,
      },
    },
  };

  const series: ApexAxisChartSeries = [
    {
      data: result.data,
    },
  ];

  return (
    <div className='flex justify-center items-center h-full'>
      {loading ? (
        <Loader />
      ) : result.data.length ? (
        <div className='w-full'>
          <ReactApexChart
            options={options}
            series={series}
            type='candlestick'
            height={400}
          />
        </div>
      ) : (
        <div className='text-center'>
          {error ? (
            <>
              <h2 className='text-3xl font-bold text-red-600'>
                Ha ocurrido un error
              </h2>
              <p className='text-red-600 text-lg'>
                {error}. Prueba reintentar la solicitud
              </p>
            </>
          ) : (
            <>
              <h2 className='text-3xl font-bold text-slate-600'>
                No hay datos para mostrar
              </h2>

              <p className='text-slate-600 text-lg'>
                Selecciona {selectedPair ? 'otro' : 'un'} par
              </p>
            </>
          )}
        </div>
      )}
    </div>
  );
}
