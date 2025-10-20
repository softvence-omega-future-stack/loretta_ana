export type ProtocolStatus = "Visueller Prüfung" | "Boels Inspection";

export type InspectionProtocol = {
  id: string;
  artikelnummer: string;
  datum: string;
  maschine: string;
  deoPrüft: string;
  benutzer: string;
  depot: string;
  status: ProtocolStatus;
  machineNummer?: string;
  machineDescription?: string;
  zahlersstand?: string;
  prueftAm?: string;
  boelsDepot?: string;
  prueftVonHerr?: string;
  unterzeichner?: string;
  pruefungsart?: string;
  schutzklasse?: string;
  elkHaelterung?: string;
  schutzleiterlaenge?: string;
  nenspannung?: string;
  messungen?: {
    erdverbindung?: string;
    isolierung?: string;
    subLeckstrom?: string;
    leckstrom?: string;
    leckstromValue?: string;
    lastLeckstrom?: string;
  };
  funktionsmessungen?: {
    funktionsMessungen?: string;
    spanningInVolt?: string;
    stromInAmpere?: string;
    leistungInWatt?: string;
    teststatus?: string;
  };
  pruefprotokollDetails?: {
    testcodes?: string;
    bemerkung?: string;
    sonstiges?: string;
    gerate_status?: string;
  };
  funktionsprufung?: {
    funktionsprufung?: string;
    art_der_prufung?: string;
    gerate_vermietereit?: string;
    nachster_prufung_am?: string;
    status?: string;
  };
};