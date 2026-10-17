import { APIProvider, Map, AdvancedMarker, Pin } from '@vis.gl/react-google-maps'

export default function LocationMap({ lat, lng, language = 'en' }) {
  const position = { lat, lng }

  return (
    <APIProvider apiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY} language={language}>
      <div style={{ width: '100%', height: '400px', borderRadius: '12px', overflow: 'hidden' }}>
        <Map
          defaultCenter={position}
          defaultZoom={15}
          mapId={import.meta.env.VITE_GOOGLE_MAP_ID || 'DEMO_MAP_ID'}
          gestureHandling="cooperative"
        >
          <AdvancedMarker position={position}>
            {/* Swap these for your exact teal and gold hex codes */}
            <Pin background="#0f766e" borderColor="#c9a227" glyphColor="#c9a227" />
          </AdvancedMarker>
        </Map>
      </div>
    </APIProvider>
  )
}