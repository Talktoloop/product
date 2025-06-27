import { Injectable } from "@angular/core";
import { ApiService } from "@core/services/api/api-base";
import { HttpClient, HttpParams } from "@angular/common/http";
import { endpoints } from "@core/services/api/endpoints";
import { IPresetFilters, PresetData, Presets } from "@core/services/api/model/preset.model";
import { Observable } from "rxjs";


@Injectable()
export class FiltersPresetService extends ApiService {

  constructor(private http: HttpClient) {
    super();
  }

  private buildHttpParams(paramName: string, userId: string): HttpParams {
    return new HttpParams().set(paramName, userId);
  }

  getPresetFilters(): Observable<Presets> {
    return this.http.get<Presets>(this.getRequestUrl(endpoints.getPresetFilters));
  }

  createFiltersPreset(presetData: PresetData): Observable<void> {
    return this.http.post<void>(this.getRequestUrl(
        endpoints.createPresetFilters),
      presetData,
    );
  }

  shareUserFiltersPresetToOrganization(presetId: string) {
    return this.http.post<void>(this.getRequestUrl(endpoints.shareUserPresetToOrganization),
      {
        presetId: presetId
      });
  }

  updateUserFiltersPreset(presetId: string, filters: PresetData | IPresetFilters) {
    return this.http.post<void>(this.getRequestUrl(endpoints.updateUserPresetFilters), {
      presetId: presetId,
      filters: filters,
    });
  }

  deleteUserFiltersPreset(presetId: string) {
    return this.http.delete<void>(this.getRequestUrl(endpoints.deleteUserPresetFilters),
      {
        params: this.buildHttpParams('presetId', presetId),
      });
  }
}
