import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import JobCard from '../components/JobCard';

const mockJob = {
  id: 1,
  title: 'Frontend Developer',
  company: 'Acme Corp',
  category: 'IT',
  salary: '$3,000',
};

const renderCard = (deleteJob = vi.fn()) =>
  render(
    <MemoryRouter>
      <JobCard job={mockJob} deleteJob={deleteJob} />
    </MemoryRouter>
  );

describe('JobCard', () => {
  it('renders job title', () => {
    renderCard();
    expect(screen.getByText('Frontend Developer')).toBeInTheDocument();
  });

  it('renders company name', () => {
    renderCard();
    expect(screen.getByText('Acme Corp')).toBeInTheDocument();
  });

  it('renders category badge', () => {
    renderCard();
    expect(screen.getByText('IT')).toBeInTheDocument();
  });

  it('renders salary', () => {
    renderCard();
    expect(screen.getByText('$3,000')).toBeInTheDocument();
  });

  it('calls deleteJob with job id when Delete is clicked', () => {
    const deleteJob = vi.fn();
    renderCard(deleteJob);
    fireEvent.click(screen.getByText('Delete'));
    expect(deleteJob).toHaveBeenCalledWith(1);
  });

  it('has a link to the job detail page', () => {
    renderCard();
    expect(screen.getByText('View Details').closest('a')).toHaveAttribute('href', '/jobs/1');
  });
});
