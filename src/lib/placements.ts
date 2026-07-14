import apiClient from "@/lib/api-client";

export type ApiPlacement = {
  id: number;
  title: string;
  company_name: string;
  description: string;
  location: string;
  experience: string;
  job_type: string;
  salary: string;
  deadline: string;
  posted_date: string;
  source_url: string | null;
  remote_available: string;
  created_at: string;
  updated_at: string;
};

export type Placement = {
  id: string;
  title: string;
  company: string;
  location: string;
  type: string;
  salary: string;
  experience: string;
  remoteAvailable: string;
  description: string;
  sourceUrl: string | null;
  deadline: string;
  postedDate: string;
};

export type PlacementsResponse = {
  success: boolean;
  message: string;
  count: number;
  total_pages: number;
  current_page: number;
  next: string | null;
  previous: string | null;
  data: ApiPlacement[];
};

export function mapPlacement(p: ApiPlacement): Placement {
  return {
    id: String(p.id),
    title: p.title,
    company: p.company_name,
    location: p.location,
    type: p.job_type,
    salary: p.salary,
    experience: p.experience,
    remoteAvailable: p.remote_available,
    description: p.description,
    sourceUrl: p.source_url,
    deadline: p.deadline,
    postedDate: p.posted_date,
  };
}

// The API only documents a paginated list endpoint (no confirmed
// single-item route), so a detail view has to page through the list
// and match by id rather than assume `/placements/<id>/` exists.
export async function findPlacementById(
  id: string,
  token?: string
): Promise<Placement | null> {
  let page = 1;
  for (;;) {
    const data = await apiClient.get<PlacementsResponse>(
      `/placements/?page=${page}`,
      token
    );
    const match = data.data.find((p) => String(p.id) === id);
    if (match) return mapPlacement(match);
    if (page >= data.total_pages) return null;
    page += 1;
  }
}
